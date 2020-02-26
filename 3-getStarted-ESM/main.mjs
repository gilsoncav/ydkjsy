import {create as createBlogPost} from './blogPost.mjs';

const post = createBlogPost(
    'O sonho do gato felix',
    'Giovanna Martinez',
    'Feb 2020',
    'https://gilsoncav.com/tese');

post.print();