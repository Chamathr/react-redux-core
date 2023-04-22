import React, { useEffect } from "react";
import { fetchData } from "../redux/slices/dataSlice";
import { useSelector, useDispatch } from "react-redux";
import { selectDataList } from "../redux/selectors/dataSelector";
import View from "../components/data/View";

const Data = () => {

    const dispatch = useDispatch();
    const dataList = useSelector(selectDataList)

    useEffect(() => {
        dispatch(fetchData())
    }, [])

    return (
        <>
            <View dataList={dataList} />
        </>
    )
}

export default Data
