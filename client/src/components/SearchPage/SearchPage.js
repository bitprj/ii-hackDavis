import React, { Component } from "react";
import { InstantSearch, SearchBox, Pagination, Configure } from "react-instantsearch-dom";
import './css/SearchPage.css'
import classes from '../../components/SearchPage/css/SearchPage.module.css';
import Grid from '@material-ui/core/Grid';

import Stats from "./Stats";
import Content from "./Content";
import Map from './Map';

import { searchClient } from '../../services/SearchService';

class SearchPage extends Component {
    render() {
        return (
            <div className={classes.SearchPage}>
                <InstantSearch indexName={process.env.REACT_APP_ALGOLIA_INDEX_NAME} searchClient={searchClient}>
                    <Configure hitsPerPage={5} />

                    <div className={classes.searchBox}>
                        <SearchBox translations={{ placeholder: "e.g. Anna Smith Spanish San Francisco" }} />
                        <Stats />
                    </div>

                    <Grid container spacing={2} justify='center'>
                        <Grid item xs={12} sm={5} md={6}>
                            <Map />
                        </Grid>

                        <Grid item xs={12} sm={7} md={6}>
                            <Content />
                        </Grid>
                    </Grid>

                    <Pagination />
                </InstantSearch>
            </div>
        );
    }
}

export default SearchPage;
