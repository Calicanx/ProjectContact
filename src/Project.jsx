import React,{useCallback} from 'react';

export default function Project() {
    const ShowContact=useCallback(() => {
        console.log('Button clicked');
    }, []);

    return (
        <div>
            <button onClick={ShowContact}>Click Button</button> 
        </div>
    );
}