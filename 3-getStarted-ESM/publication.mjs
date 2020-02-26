function printDetails(title, author, pubDate) {
    console.log(`
        Title: ${title}
        By: ${author}
        ${pubDate}
    `);
}

export function create(title, author, pubDate) {
    let publicAPI = {
        print() {
            printDetails(title, author, pubDate);
        }
    };

    return publicAPI;
}

