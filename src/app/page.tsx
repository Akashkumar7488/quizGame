// import Navbar from '../components/Navbar'
// import Footer from '../components/footer'
// import Main from '../components/main'
// import Cardsection from '../components/cardsection'


// export default function Home() {
//   return (
//     <>
//     <Navbar/>
//     <Main/>
//     <Cardsection/>
//     <Footer/>
//     </>
//   );
// }



// src/app/page.tsx
"use client"
import Main from '../components/main';
import Cardsection from '../components/cardsection';
import MyComponent from '@/components/MyComponent';

export default function Home() {
    return (
        <>
            <MyComponent/>
            <Main />
            <Cardsection />
        </>
    );
}
