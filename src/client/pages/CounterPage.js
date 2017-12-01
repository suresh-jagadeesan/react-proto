import React from 'react';
import Counter from '../components/Counter';
import { Helmet } from 'react-helmet';

const CounterPage = () => (
    <div>
        <Helmet>
            <title>Counter Page</title>
        </Helmet>
        <h1>Counter Page</h1>
        <Counter/>
    </div>
);

export default CounterPage;