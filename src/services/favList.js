import { create } from 'zustand';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('fox.db');

db.transaction(tx => {
    tx.executeSql('CREATE TABLE IF NOT EXISTS favs (id INTEGER PRIMARY KEY AUTOINCREMENT, username VARCHAR NOT NULL, fav_id INTEGER NOT NULL)');
})

export const useFavListStore = create((set) => {
    return {
        idsFavList: [],
        loadFavList: (username) => {
            db.transaction(tx => {
                tx.executeSql("SELECT * FROM favs WHERE username = ?", [username],
                    (_txObject, resulSet) => {
                        set({ idsFavList: resulSet.rows._array})
                    },
                    (_txObject, error) => console.log(error)
                );
            })
        },
        addFav: (username, id) => {
            db.transaction(tx => {
                tx.executeSql("INSERT INTO favs (username, fav_id) VALUES (?, ?)", [username, id],
                    (_txObject, _resulSet) => set(state => ({ idsFavList: state.idsFavList.concat([id]) })),
                    (_txObject, error) => console.log(error)
                );
            })
        },
        dropFav: (username, id) => {
            db.transaction(tx => {
                tx.executeSql("DELETE FROM favs WHERE username = ? AND fav_id = ?", [username, id],
                    (_txObject, _resulSet) => set(state => ({ idsFavList: state.idsFavList.filter(fav => fav !== id)})),
                    (_txObject, error) => console.log(error)
                );
            })
            
        }
    }
})