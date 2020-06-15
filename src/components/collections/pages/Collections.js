import React, { useState,useEffect } from "react";
import CollectionItem from "../../widgets/collectionItem/CollectionItem";
import Pagination from "../../widgets/pagination/Pagination";
import axios from 'axios';
import TransitionsModal from "../../widgets/transitionsmodal/TransitionsModal";

export default function Collections() {

    const [collections,setCollections] = useState([]);
    const [currentPage,setCurrentPage] = useState(1);
    const [collectionsPerPage] = useState(8);

    useEffect(()=> {
      const fetchCollections = async () => {
        const res = await axios.get('http://localhost:8080/api/collection/get');
        setCollections(res.data);
      }
  
      fetchCollections();
    },[]);

    const indexOfLastCollection = currentPage * collectionsPerPage;
    const indexOfFirstCollection = indexOfLastCollection - collectionsPerPage;
    const currentCollections = collections.slice(indexOfFirstCollection, indexOfLastCollection);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
      <div>
      <h1
        style={{
          marginTop: 80,
          marginBottom: 70,
          marginLeft:10,
          fontWeight: "lighter"
        }}
      >
        My Collections
      </h1>
      <div
        style={{
          marginTop: -80,
          marginLeft: 1085,
          padding: 12,
          marginBottom: 30,
          color: "rgb(10, 120, 163)",
          fontWeight: "bold"
        }}
      >
      <TransitionsModal />
      </div>
      <div style={collectionStyle}>
        {currentCollections.map(collection => (
          <CollectionItem key={collection.id} collection={collection} />
        ))} 
      <Pagination collectionsPerPage={collectionsPerPage} totalCollections={collections.length} paginate={paginate}/>
      </div>
      </div>
    );
  }

const collectionStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(4,1fr)",
  gridGap: "1rem"
};

