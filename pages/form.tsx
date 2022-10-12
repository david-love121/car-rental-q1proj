import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import FormBox from '../components/formbox';
import Header from '../components/header';

const Form: NextPage = () => {
    const [formState, setFormState] = useState(0);
    return (
        <div className="h-screen landing-bg blurg">
            <Header dark={true}/>
            <FormBox mode={formState} changeMode={setFormState}/>
        </div>
    );
}
export default Form;