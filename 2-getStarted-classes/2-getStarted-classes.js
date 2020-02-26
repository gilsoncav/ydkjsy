class Publication {
    constructor (title, author, pubDate) {
        this.title = title;
        this.author = author;
        this.pubDate = pubDate;
    }

    print() {
        console.log(`
            Title: ${this.title}
            By: ${this.author}
            Date: ${this.pubDate}
        `);
    }
}

const newPublication1 = new Publication('Gilson\'s Story', 'Gilson Cavalcanti', 'April 2022');
newPublication1.print();

class Book extends Publication {
    constructor(bookDetails) {
        super(bookDetails.title, bookDetails.author, bookDetails.pubDate);
        this.ISBN = bookDetails.ISBN;
        this.publisher = bookDetails.publisher;
    }

    print() {
        super.print();
        console.log(`
            Publisher: ${this.publisher}
            ISBN: ${this.ISBN}
        `);
    }
}

const newBook1 = new Book({
    title: 'A aventura do gato roxo',
    author: 'Sophia Cavalcanti',
    pubDate: 'November 2029',
    publisher: 'Penguim Books',
    ISBN: '234565234-HSN'
});

newBook1.print();

class BlogPost extends Publication {
    constructor(title, author, pubDate, url) {
        super (title, author, pubDate);
        this.url = url;
    }

    print() {
        super.print();
        console.log(`url: ${this.url}`);
    }
}

const newBlogPost1 = new BlogPost('The adventure of the wild Platypus', 'Gilson Cavalcanti',
    'May 2020', 'https://gilsonninja.com/newPost');

newBlogPost1.print();