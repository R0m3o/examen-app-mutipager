import React from 'react';

function Comment() {
    return (
        <section className="row">
            <div className="offset-sm-0 col-sm-12 offset-md-3 col-md-6">
                <p><b>Kommentar</b> {product.kommentar.length} &#128172;</p>
            </div>
        </section>
    )
}

export default Comment;