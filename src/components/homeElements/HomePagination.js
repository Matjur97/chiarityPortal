import React, { useEffect, useState } from 'react';
import Posts from './HomePaginationPosts';
import ReactPaginate from 'react-paginate';
import '../../styles/main.scss';

const HomePagination = () => {
    const [active, setActive] = useState("foundations");
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [postsPerPage, setPostsPerPage] = useState(3);
    const [hidden, setHidden] = useState("")

    const handleFoundations = (e) => {
        e.preventDefault();
        setActive("foundation")
        setHidden("")
        window.location.reload();
    }

    const handleOrganizations = (e) => {
        e.preventDefault();
        setActive("organizations")
        setHidden("")
    }

    const handleLocal = (e) => {
        e.preventDefault();
        setActive("local")
        setHidden("hidden")
    }

    useEffect(() => {
        fetch(`http://localhost:3005/${active}`)
            .then(res => res.json())
            .then(post => {
                setPosts(post)
            })
            .catch((err) => console.warn(err))
    }, [active])

    const displayPage = currentPage * postsPerPage;
    const currentPosts = posts.slice(displayPage, displayPage + postsPerPage);
    const pageCount = Math.ceil(posts.length / postsPerPage);
    const changePage = ({ selected }) => {
        setCurrentPage(selected)
    }

    console.log(active)

    return (
        <section className="pagination">
            <div className="pagination-container">
                <h1>Komu pomagamy?</h1>
                <div className="deco"></div>
                <div className="content-buttons">
                    <button onClick={handleFoundations}>
                        <p>Fundacjom</p>
                    </button>
                    <button onClick={handleOrganizations}>
                        <p><span>Organizacjom</span><span>pozarządowym</span></p>
                    </button>
                    <button onClick={handleLocal}>
                        <p><span>Lokalnym</span><span>zbiórkom</span></p>
                    </button>
                </div>
                <div className="paragraph">
                    <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji,
                        z którymi współpracujemy. Możesz sprawdzić czym się
                        zajmują, komu pomagają i czego potrzebują.
                    </p>
                </div>
                <div className="pagination-content">
                    <Posts posts={currentPosts} />
                    <div className={hidden}>
                        <ReactPaginate
                            previousLabel={"Poprzednia"}
                            nextLabel={"Następna"}
                            pageCount={pageCount}
                            onPageChange={changePage}
                            containerClassName={"paginationButtons"}
                            previousLinkClassName={"previousButton"}
                            nextLinkClassName={"nextButton"}
                            disabledClassName={"paginationDisables"}
                            activeClassName={"paginationActive"}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomePagination;