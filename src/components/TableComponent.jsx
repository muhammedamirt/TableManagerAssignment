import React, { useEffect, useState } from 'react'
import { userData } from '../utils/data'
import { BsArrowsExpand } from 'react-icons/bs'
import ReactPaginate from 'react-paginate';
import { BiSearchAlt2, BiRefresh } from 'react-icons/bi';

// Number of rows to display per page
const PAGE_SIZE = 10;

const TableComponent = ({ showTable1 }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [filterText, setFilterText] = useState('');
    const [data, setData] = useState([...userData])
    const [sortOrder, setSortOrder] = useState("asc");
    const [sortColumn, setSortColumn] = useState("");
    const [refresh,setRefresh] = useState(false)


    // function for paginate the table 
    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };
    const startIndex = currentPage * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;

    // function for global filter

    const handleFilterChange = event => {
        setFilterText(event.target.value);
        setCurrentPage(0);
    };
    useEffect(() => {
        setData(userData.filter(row =>
            row.name.toLowerCase().includes(filterText.toLowerCase())
        ))
    }, [filterText])

    // implementing sort in this table for individual columns
    const handleSort = (column) => {
        if (column === sortColumn) {
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        }

        setData(data.sort((a, b) => {
            if (sortOrder === "asc") {
                return a[column] > b[column] ? 1 : -1;
            } else {
                return a[column] < b[column] ? 1 : -1;
            }
        }))
        setSortColumn(column);
    };


    //filtering for individual columns
    const handleFilterColumn = (value, field) => {
        if (!value) return setData(userData)
        value = value.toLowerCase()
        setData(userData.filter((elem) => {
            return elem[field].toString().toLowerCase().includes(value)
            // return 
        }))
    }
    const handleRefreshButton = () => {
        setData([...userData])
    }
    return ( 
        <div>
            <div className='flex justify-between'>
                {showTable1 &&
                    <div className='bg-white w-60 flex shadow-md rounded-l-xl'>
                        <span className='flex justify-center items-center w-2/12 text-2xl  bg-gray-800 text-white rounded-l-xl'>
                            <BiSearchAlt2 />
                        </span>
                        <input
                            type="text"
                            className='w-10/12 outline-none p-1 rounded-sm'
                            placeholder="Search by Name"
                            value={filterText}
                            onChange={handleFilterChange} />
                    </div>

                }
                <div>
                    <div>
                        <button onClick={handleRefreshButton} className='group bg-gray-600 rounded-sm  p-3  text-white text-lg hover:bg-gray-500 transition'>
                            <BiRefresh className='group-hover:animate-spin'/>
                        </button>
                    </div>
                </div>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-1">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-3 py-3">
                                <div>
                                    <div >
                                        id
                                    </div>
                                    <div className='flex gap-1 w-40'>
                                        <input onChange={(e) => handleFilterColumn(e.target.value, "id")} type="number" className='w-9/12 p-1 outline rounded-sm my-1' placeholder='filter this Id' />
                                        <div className='w-2/12'>
                                            <button onClick={() => handleSort('id')} className='bg-gray-600 rounded-sm  p-2 text-white text-lg hover:bg-gray-500 transition'>
                                                <BsArrowsExpand />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </th>
                            <th scope="col" className="px-3 py-3">
                                <div>
                                    <div>
                                        Name
                                    </div>
                                    <div className='flex gap-1 w-40'>
                                        <input onChange={(e) => handleFilterColumn(e.target.value, "name")} type="text" className='w-9/12 p-1 outline rounded-sm my-1' placeholder='filter this Name' />
                                        <div className='w-2/12'>
                                            <button onClick={() => handleSort('name')} className='bg-gray-600 rounded-sm  p-2 text-white text-lg hover:bg-gray-500 transition'>
                                                <BsArrowsExpand />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </th>
                            <th scope="col" className="px-3 py-3">
                                <div>
                                    <div>
                                        Age
                                    </div>
                                    <div className='flex gap-1 w-40'>
                                        <input onChange={(e) => handleFilterColumn(e.target.value, "age")} type="text" className='w-9/12 p-1 outline rounded-sm my-1' placeholder='filter this Age' />
                                        <div className='w-2/12'>
                                            <button onClick={() => handleSort('age')} className='bg-gray-600 rounded-sm p-2 text-white text-lg hover:bg-gray-500 transition'>
                                                <BsArrowsExpand />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </th>
                            <th scope="col" className="px-3 py-3">
                                <div>
                                    <div>
                                        City
                                    </div>
                                    <div className='flex gap-1 w-40'>
                                        <input onChange={(e) => handleFilterColumn(e.target.value, "city")} type="text" className='w-9/12 p-1 outline rounded-sm my-1' placeholder='filter this City' />
                                        <div className='w-2/12'>
                                            <button onClick={() => handleSort('city')} className='bg-gray-600 rounded-sm  p-2 text-white text-lg hover:bg-gray-500 transition'>
                                                <BsArrowsExpand />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </th>
                            {showTable1 && <>
                                <th scope="col" className="px-3 py-3">
                                    <div>
                                        <div>
                                            Country
                                        </div>
                                        <div className='flex gap-1 w-40'>
                                            <input onChange={(e) => handleFilterColumn(e.target.value, "country")} type="text" className='w-9/12 p-1 outline rounded-sm my-1' placeholder='filter this Country' />
                                            <div className='w-2/12'>
                                                <button onClick={() => handleSort('country')} className='bg-gray-600 rounded-sm  p-2 text-white text-lg hover:bg-gray-500 transition'>
                                                    <BsArrowsExpand />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </th>
                                <th scope="col" className="px-3 py-3">
                                    <div>
                                        <div>
                                            Phone
                                        </div>
                                        <div className='flex gap-1 w-40'>
                                            <input onChange={(e) => handleFilterColumn(e.target.value, "phone")} type="text" className='w-9/12 p-1 outline rounded-sm my-1' placeholder='filter this Phone' />
                                            <div className='w-2/12'>
                                                <button onClick={() => handleSort('phone')} className='bg-gray-600 rounded-sm  p-2 text-white text-lg hover:bg-gray-500 transition'>
                                                    <BsArrowsExpand />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </th>
                            </>
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {data.slice(startIndex, endIndex).map((person) => (
                            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4">
                                    {person.id}
                                </th>
                                <th scope="row" className="px-6 py-4">
                                    {person.name}
                                </th>
                                <td className="px-6 py-4">
                                    {person.age}
                                </td>
                                <td className="px-6 py-4">
                                    {person.city}
                                </td>
                                {showTable1 && <>
                                    <td className="px-6 py-4">
                                        {person.country}
                                    </td>
                                    <td className="px-6 py-4">
                                        {person.phone}
                                    </td>
                                </>
                                }
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
            <div className='flex justify-center m-1 p-2 '>
                <div className='bg-gray-600 w-4/12 flex justify-center p-2 rounded-md '>
                    <ReactPaginate
                        pageCount={Math.ceil(data.length / PAGE_SIZE)}
                        pageRangeDisplayed={5}
                        marginPagesDisplayed={2}
                        onPageChange={handlePageChange}
                        containerClassName={'pagination'}
                        activeClassName={'active'}
                        className='flex gap-4 text-xl font-semibold text-white'
                    />
                </div>
            </div>
        </div>
    )
}

export default TableComponent