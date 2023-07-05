import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getData } from "../redux/actions/dataAction";
import { connect } from "react-redux";
import { selectDataList } from "../redux/selectors/dataSelector";
import View from "../components/data/View";

const Data = (props) => {

    const { getData } = props

    const dataList = useSelector(selectDataList)

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <View dataList={dataList} />
        </>
    )
}

const mapDispatchToProps = {
    getData: getData,
  };

export default connect(null, mapDispatchToProps)(Data);