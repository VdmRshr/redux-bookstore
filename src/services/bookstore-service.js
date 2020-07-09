export default class BookstoreService {

    data= [
        {
            id: 1,
            title: 'Tom Soyer',
            author: 'A Ya Kleshnya',
            price:20,
            img: 'https://manybooks.net/sites/default/files/styles/220x330sc/public/old-covers/cover-orig-14299.jpg?itok=wPpEKSe6'

        },
        {
            id: 2,
            title: 'Mathematics',
            author: 'I Ya Kleshnya',
            price:30,
            img: 'https://manybooks.net/sites/default/files/styles/220x330sc/public/old-covers/cover-orig-14299.jpg?itok=wPpEKSe6'

        },
    ];
    getBooks() {
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{

                resolve(this.data);
                // reject(new Error('Warning!!! Error!!!'))
            },700);
        })
    }
}

