import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { HouseInfoContext } from "../context/houseInfo"

export const HomePage = () => {
    const { houseInfo, setHouseInfo } = useContext(HouseInfoContext)

    const handlePredict = async () => {
        const apiUrl = "http://127.0.0.1:8000/model"
        const param = houseInfo
        const result = await axios.post(apiUrl,param)
        console.log(result)
        console.log(houseInfo)
    }
    
    return (
        <div>
            <div>
                Diện tích đất: <input placeholder="(m2)" onChange={e => setHouseInfo({ ...houseInfo, Area: e.target.value })}></input>
            </div>
            <div>
                Diện tích sử dụng: <input placeholder="(m2)" onChange={e => setHouseInfo({ ...houseInfo, Useable_area: e.target.value })}></input>
            </div>
            <div>
                Số phòng ngủ: <input type="number" placeholder="v.d. 3 (phòng)" onChange={e => setHouseInfo({ ...houseInfo, Number_of_bedroom: e.target.value })}></input>
            </div>
            <div>
                Số phòng vệ sinh: <input type="number" placeholder="v.d. 4 (phòng)" onChange={e => setHouseInfo({ ...houseInfo, bathroomNumber: e.target.value })}></input>
            </div>
            <div>
                Tổng số tầng: <input type="number" placeholder="v.d. 5 (tầng)" onChange={e => setHouseInfo({ ...houseInfo, floorNumber: e.target.value })}></input>
            </div>
            <div>
                <label htmlFor="legalDocuments">Giấy tờ pháp lý: </label>
                <select name="legalDocuments" onChange={e => setHouseInfo({...houseInfo, legalDocuments: e.target.value})}>
                    <option value="nan">nan</option>
                    <option value="Đã có sổ'">Đã có sổ'</option>
                    <option value="Đang chờ sổ'">Đang chờ sổ'</option>
                    <option value="Giấy tờ khác">Giấy tờ khác</option>
                </select>
            </div>
            <div>
                <label htmlFor="houseType">Loại hình nhà ở: </label>
                <select name="houseType" onChange={e => setHouseInfo({...houseInfo, Type_of_house: e.target.value})}>
                    <option value="nan">nan</option>
                    <option value="Nhà ngõ">Nhà ngõ</option>
                    <option value="Nhà mặt phố">Nhà mặt phố</option>
                    <option value="Nhà biệt thự">Nhà biệt thự</option>
                    <option value="Nhà phố liền kề">Nhà phố liền kề</option>
                </select>
            </div>
            <div>
                <label htmlFor="furnitureStatus">Tình trạng nội thất: </label>
                <select name="furnitureStatus" onChange={e => setHouseInfo({...houseInfo, furnitureStatus: e.target.value})}>
                    <option value="nan">nan</option>
                    <option value="Nội thất đầy đủ">Nội thất đầy đủ</option>
                    <option value="Nội thất cao cấp">Nội thất cao cấp</option>
                    <option value="Hoàn thiện cơ bả">Hoàn thiện cơ bản</option>
                    <option value="Bàn giao thô">Bàn giao thô</option>
                </select>
            </div>
            <div>
                <label htmlFor="location">Địa chỉ: </label>
                <select name="location" onChange={e => setHouseInfo({...houseInfo, location: e.target.value})}>
                    <option value="Hà Nội">Hà Nội</option>
                    <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                </select>
            </div>
            <button onClick={handlePredict}>
                Submit
            </button>
            <div>
                Price: {houseInfo.price}
            </div>
        </div>
    )
}