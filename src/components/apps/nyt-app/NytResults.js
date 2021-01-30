import React from 'react';

const NytResults = (props) => {
    return (
        <div>
            <div>
                {props.results.map(result => {
                    return (
                        <div key={result._id}>
                            <h2>{result.headline.main}</h2>
                            {result.multimedia.length > 1 ? <img alt="article" src={`http://www.nytimes.com/${result.multimedia[1].url}`} /> : ''}
                            <p>
                                {result.snippet}
                                <br />
                                {result.keywords.length > 0 ? ' Keywords: ' : ''}
                            </p>
                            <ul>
                                {result.keywords.map(keyword => <li key={keyword.value}>{keyword.value}</li>)}
                            </ul>
                            <a href={result.web_url}><button>Read It</button></a>
                        </div>
                    )
                })}
                <div>
                    <button onClick={(e) => props.changePageNumber(e, 'down')}>Previous 10</button>
                    <button onClick={(e) => props.changePageNumber(e, 'up')}>Next 10</button>
                </div>
            </div>
        </div>
    )
}

export default NytResults;