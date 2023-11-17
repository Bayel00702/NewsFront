import React, { lazy, Suspense } from 'react';

const GeneralNews = lazy(() => import('./components/GeneralNews/GeneralNews'));
const ListNews = lazy(() => import('./components/ListNews/ListNews'));

const Home = () => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <GeneralNews />
                <ListNews />
            </Suspense>
        </div>
    );
};

export default Home;