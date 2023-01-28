import axios from "axios"
import { useContext } from "react"
import { HouseInfoContext } from "../context/houseInfo"

export const HomePage = () => {
    const { houseInfo, setHouseInfo } = useContext(HouseInfoContext)

    console.log(houseInfo)

    const handlePredict = async () => {
        const apiUrl = "https://be-ask.tanaypratap.repl.co/playlist"
        const result = await axios.get(apiUrl)
        console.log(result.data)
    }
    return (
        <div>
            <div>
                Diện tích đất: <input placeholder="(m2)" onChange={e => setHouseInfo({ ...houseInfo, area: e.target.value })}></input>
            </div>
            <div>
                Diện tích sử dụng: <input placeholder="(m2)" onChange={e => setHouseInfo({ ...houseInfo, useableArea: e.target.value })}></input>
            </div>
            <div>
                Số phòng ngủ: <input type="number" placeholder="v.d. 3 (phòng)" onChange={e => setHouseInfo({ ...houseInfo, bedroomNumber: e.target.value })}></input>
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
                    <option value="0">nan</option>
                    <option value="1">Đã có sổ'</option>
                    <option value="2">Đang chờ sổ'</option>
                    <option value="3">Giấy tờ khác</option>
                </select>
            </div>
            <div>
                <label htmlFor="houseType">Loại hình nhà ở: </label>
                <select name="houseType" onChange={e => setHouseInfo({...houseInfo, houseType: e.target.value})}>
                    <option value="0">nan</option>
                    <option value="1">Nhà ngõ</option>
                    <option value="2">Nhà mặt phố</option>
                    <option value="3">Nhà biệt thự</option>
                    <option value="4">Nhà phố liền kề</option>
                </select>
            </div>
            <div>
                <label htmlFor="furnitureStatus">Tình trạng nội thất: </label>
                <select name="furnitureStatus" onChange={e => setHouseInfo({...houseInfo, furnitureStatus: e.target.value})}>
                    <option value="0">nan</option>
                    <option value="1">Nội thất đầy đủ</option>
                    <option value="2">Nội thất cao cấp</option>
                    <option value="3">Hoàn thiện cơ bản</option>
                    <option value="4">Bàn giao thô</option>
                </select>
            </div>
            <div>
                <label htmlFor="location">Địa chỉ: </label>
                <select name="location" onChange={e => setHouseInfo({...houseInfo, location: e.target.value})}>
                    <option value="0">Hà Nội</option>
                    <option value="1">Hồ Chí Minh</option>
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