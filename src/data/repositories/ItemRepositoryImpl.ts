import { Item } from "../../domain/entities/Item"
import { ItemRepository } from "../../domain/repositories/ItemRepository"

class ItemDTO {
    id = 0
    name = ""
    year = ""
    color = ""
    pantone_value = ""

}

export class ItemRepositoryImpl implements ItemRepository {
    jsonUrl =
        "https://gist.githubusercontent.com/cjdama/120300fd9753bd257c027c73e148d3aa/raw/d401a61fb04e65415989560604dab15131cf8c7b/itemlist.json"

    async GetItems(): Promise<Item[]> {
        const res = await fetch(this.jsonUrl)
        const jsonData = await res.json()
        return jsonData.map((item: ItemDTO) => new Item(item.id, item.name, item.year, item.color, item.pantone_value))
    }
}
