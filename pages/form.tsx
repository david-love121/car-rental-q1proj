import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import FormBox from '../components/formbox';
import Header from '../components/header';

const Form: NextPage = () => {
    const [formState, setFormState] = useState(0);
    const [hState, setHState] = useState("h-screen");
    const [formMap, setFormMap] = useState(new Map());

    return (
        <div className={"landing-bg blurg " + (formState != 1 ? "h-screen" : "h-auto")}>
            <Header dark={true}/>
            
            <FormBox mode={formState} changeMode={setFormState} formValues={formMap} setFormValues={setFormMap}/>
            
            <br />
        </div>
    );
}
export default Form;