//In questo file andiamo a definire una funzione che ci permetterà di effetturare tutte le chiamate a DatoCMS.
//Possiamo prenderla pari pari dalla documentazione senza modifiche.

//NB: Per il deploy è fondamentale inserire le due costanti nel file .env

import { executeQuery } from '@datocms/cda-client';
import { cache } from 'react';

const dedupedPerformRequest = cache(async (serializedArgs) => {
    return executeQuery(...JSON.parse(serializedArgs));
})

export function performRequest(query, options) {
    return dedupedPerformRequest(JSON.stringify([
        query,
        {
            ...options,
            token: process.env.NEXT_DATOCMS_API_TOKEN,
            environment: process.env.NEXT_DATOCMS_ENVIRONMENT,
        }
    ]));
}