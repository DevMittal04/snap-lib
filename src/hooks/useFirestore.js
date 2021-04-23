import { projFirestore } from '../firebase/config';
import { useState, useEffect } from 'react';

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const unsub = projFirestore.collection(collection)
        .orderBy('createdAt', 'desc')
        .onSnapshot((snap) => {
            var documents = [];
            snap.forEach(doc => {
                documents.push({...doc.data(), id: doc.id})
            });
            setDocs(documents);
        })

        // Cleanup Function - Unsubscribe from the collection when we no longer use it
        return () => unsub();

    }, [collection])

    return { docs };
}

export default useFirestore;