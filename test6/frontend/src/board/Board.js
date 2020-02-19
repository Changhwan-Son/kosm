import React, { useEffect, useState } from 'react';
import './Board.scss';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import Data from './ArticleData' // 게시글 테스트 데이터
import renderEmpty from 'antd/lib/config-provider/renderEmpty';

const { SearchBar } = Search;

const columns = [
    {
        dataField: 'id',
        text: '번호',
        type: 'number',
        headerStyle: () => {
            return { width: '60px' };
        },
    },
    {
        dataField: 'title',
        text: '제목'
    },
    {
        dataField: 'author',
        text: '글쓴이',
        headerStyle: () => {
            return { width: '120px' };
        },
    },
    {
        dataField: 'time',
        text: '날짜',
        //type: 'date',
        headerStyle: () => {
            return { width: '100px' };
        },
    }
];
  
const Board = () => {
    return (
        <div className='boardScreen'>
            <ToolkitProvider
                keyField="id"
                data={ JSON.parse(localStorage.articles) } // 게시글 데이터 localStorage.data에서 불러오기
                columns={ columns }
                search>
                {
                    props => (
                        <div>
                            <h3>게시판</h3>
                            <SearchBar
                                { ...props.searchProps }
                                className="custome-search-field"
                                placeholder="검색"/>
                            <hr />
                            <BootstrapTable
                                striped
                                hover
                                condensed
                                { ...props.baseProps }
                                pagination={ paginationFactory() } 
                                noDataIndication="내용이 없습니다"
                            />
                        </div>
                    )
                }
            </ToolkitProvider>
        </div>
    )
};

export default Board;