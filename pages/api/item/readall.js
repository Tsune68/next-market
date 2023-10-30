import connectDB from "../../../utils/database"
import { ItemModel } from "../../../utils/schemaModels"

const readAllItems = async(req, res) => {
  try {
    await connectDB()
    const allItems = await ItemModel.find()

    return res.status(200).json({message: "読み取り成功！", allItems: allItems})
  } catch(err) {
    return res.status(400).json({message: "読み取り失敗しました"})
  }
}

export default readAllItems
