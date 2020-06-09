import React from 'react'

const SearchForm = ({ setSearchTerm }) => {

  React.useEffect(() => {
    searchValue.current.focus();
  })
  const searchValue = React.useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const searchWine = () => {
    setSearchTerm(searchValue.current.value)
  }

  return (
    <section className="section">
      <h2 className="section-title">Search for Wine</h2>
      <form className="form search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlForm='name'>Search your favorite wine</label>
          <input type="text" name="name" id="name" onChange={searchWine} ref={searchValue} />
        </div>
      </form>
    </section>
  )
}


export default SearchForm;