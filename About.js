
function About(props) {
    let myStyle = {
        // color : props.mode === 'dark'?'black':'#d6d0d0',
        color : 'black',
        backgroundColor : props.mode === 'dark'?'#d6d0d0':'white',
        // backgroundColor : '#d6d0d0',
        borderColor : 'black'
    }

    return (
        <>
        <div className='container rounded my-3'>
            <div className="accordion" id="accordionExample" style={myStyle}>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Textutils gives you a way to analyze your text quickly and efficiently. Be it word count or character count.    
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Textutils is a free character counter tool that provides instant character count & word count statistics for a given text. 
                            Textutils reports the number of words and characters. Thus it is suitable for writing text with word or character limit.   
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            This word counter software works in any web browsers such as chrome, Firefox, Internet Explorer,Safari, Opera.
                            It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.    
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default About
