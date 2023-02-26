import React, { useEffect, useRef, useState } from 'react';
import './App.scss';
import FeatureList from './components/FeatureList';
import Pagination from './components/Pagination';
import { TankInterface, MetaDataInterface, ResponseRequest } from './components/Types';
import { apiCall } from './services/apiCall';
import { getFilteredList } from './services/getFilteredList';

function App() {
  const [itemsList, setItemsList] = useState<TankInterface[] | null>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isFilter, setIsFilter] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [filtereId, setFilteredId] = useState<string>();
  const [meta, setMeta] = useState<MetaDataInterface | null>();
  const filterInput = useRef<HTMLInputElement>(null);
  const itemsPerPageInput = useRef<HTMLInputElement>(null);
  const [isResetFilter, setIsResetFilter] = useState<boolean>(false);

  useEffect((): void => {
    const getTanksList = async () => {
      setLoading(true);
      const response: ResponseRequest = await apiCall(itemsPerPage, currentPage, isFilter, filtereId);
      const tanks = Object.values(response.data).filter(item => item);

      setItemsList(tanks);
      setMeta(response.meta);
      setLoading(false);
    }
    
    getTanksList();
  }, [itemsPerPage, currentPage, isResetFilter])

  const handleFilter = (searchValue: string): void => {
    if (searchValue) {
        setLoading(true);
        setIsFilter(true)
        const tanks = getFilteredList(itemsPerPage, searchValue, currentPage, true, setFilteredId);
        tanks.then(response => {
          setItemsList(response.data);
          setMeta(response.meta);
          setLoading(false);
        })
    }
  };
  
  const resetFilter = (): void => {
    if (filterInput.current) {
      filterInput.current.value = '';
    }
    setCurrentPage(1);
    setIsFilter(false);
    setIsResetFilter(!isResetFilter);
  };
  
  const setcounter = (): void => {
    if (itemsPerPageInput.current) {
      setItemsPerPage(Number(itemsPerPageInput.current.value));
      itemsPerPageInput.current.value = '';
    }
  };

  return (
    <div className="App">
      <header className="header">
        <div>
          <input className="header__input" type="text" ref={filterInput} />
          <button className="header__btn" type="button" onClick={(): void => handleFilter(filterInput.current?.value ||'')}>Filter</button>
          {isFilter && 
            <button className="header__btn" type="button" onClick={(): void => resetFilter()}>Reset</button>
          }
        </div>
        <Pagination itemsPerPage={itemsPerPage} totalItems={meta?.total} setCurrentPage={setCurrentPage} currentPage={currentPage} />
        <div>
          <input className="header__input" type="text" ref={itemsPerPageInput} />
          <button className="header__btn" type="button" onClick={(): void => setcounter()}>Edit</button>
        </div>
      </header>
      <FeatureList tanks={itemsList} loading={loading} />
    </div>
  );
}

export default App;
