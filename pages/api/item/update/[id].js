import connectDB from "../../../../utils/database"
import { ItemModel } from "../../../../utils/schemaModels"

const updateItem = async(req, res) => {
  try {
    await connectDB()
    await ItemModel.updateOne(req.body)
    return res.status(200).json({message: "修正成功！"})

  } catch(err) {
    return res.status(400).json({message: "修正失敗！"})
  }
}

export default updateItem
