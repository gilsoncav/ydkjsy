import {create as createPublication} from './publication.mjs';

function printDetails(publication, URL) {
    publication.print();
    console.log(`url: ${URL}`);
}

export function create (title, author, pubDate, URL) {
    let publication  = createPublication(title, author, pubDate);
    let publicAPI = {
        print() {
            publication.print();
            printDetails(publication, URL);
        }
    };

    return publicAPI;
}