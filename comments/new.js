const React = require('react')

const New = ({ place }) => {
    return (
        <Def>
            <main>
                <h1>Add a New Comment for: {place.name}</h1>
                <form action={`/places/${place.id}/comments`} method='POST'>
                    <div className="form-group row justify-content-center">
                        <div className="col-6">
                        <label htmlFor='author'>Author</label>
                        <input type='text' name='author' id='author' className="form-control"/>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor='rant'>
                            NO HERO🤬!{' '}
                            <input type='checkbox' name='rant' id='rant' className="checkbox"/>
                        </label>
                    </div>
                    <div className="mb-3">
                        <label htmlFor='rave'>
                            SAVES CITY🥳!{' '}
                            <input type='checkbox' name='rave' id='rave' className="checkbox"/>
                        </label>
                    </div>
                    <div className="form-group row justify-content-center">
                        <div className="mb-3">
                        <label htmlFor='stars'>Stars⭐</label>
                        <input
                            type='number'
                            step={0.5}
                            name='stars'
                            id='stars'
                            className='form-control'
                        />
                        </div>
                    </div>
                    <div className="form-group row justify-content-center">
                        <div className="col-6">
                        <label htmlFor='content'>Content</label>
                        <input
                            type='text'
                            name='content'
                            id='content'
                            className='form-control'
                            required
                        />
                        </div>
                    </div>
                    
                    <div className="mb-3">
                        <button type='submit' className='btn btn-primary'>
                            <i className='bi bi-plus-circle-fill'></i> Add Comment
                        </button>
                    </div>
                </form>
            </main>
        </Def>
    );
};

module.exports = New;