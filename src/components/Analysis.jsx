import React from 'react';

const Analysis = (props) => {

    return (
        <div>
            <h1 style={{textAlign: "center", marginTop: 30, marginBottom: 30}}>Git Review</h1>
            <div style={{textAlign: "center"}}>
                <input style={{padding: 5}} value={props.username} type="text" onChange={props.onChangeInput}/>
                <button style={{marginLeft: 5}} onClick={props.handleSubmit}>Analise</button>
            </div>
            {
                !props.error ?
                    <div>
                        <div style={{textAlign: "center"}}>
                            <img src={props.pie_chart}/>
                        </div>
                        <div style={{textAlign: "center"}}>
                            {
                                props.languages.length > 0 &&
                                props.languages.map(language => {
                                    return (
                                        <div>
                                            {
                                                language[0]
                                            } - {
                                            language[1]
                                        }
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    :
                    <div style={{textAlign: "center"}}>
                        Error!
                    </div>

            }
        </div>
    );
}
;

export default Analysis;