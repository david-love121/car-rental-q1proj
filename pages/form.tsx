import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import FormBox from '../components/formbox';
import Header from '../components/header';

const Form: NextPage = () => {
    return (
        <div className="h-screen landing-bg blurg">
            <Header dark={true}/>
            <FormBox />
        </div>
    );
}
export default Form;