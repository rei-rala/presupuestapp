import { v4 as uuidv4 } from 'uuid'

class Row {
  isTitle: boolean
  fields: { [key: string]: string | number }

  constructor(isTitle: boolean = false, ...columns: string[]) {
    this.isTitle = isTitle
    this.fields = {}

    isTitle
      ? this.fields.title = ''
      : columns.forEach(title => { this.fields[title] = '' })
  }

  getFieldContent(title: string): string | number {
    return this.fields[title]
  }

  setFieldContent(title: string, value: string | number): void {
    this.fields[title] = value
  }

  getRow(): any {
    return this.fields
  }
}


class Spreadsheet {
  id: string;
  author: string;
  title: string;
  rows: Row[];
  columns: string[];
  created: Date;
  updated: Date;

  constructor(title: string, author: string, ...columns: string[]) {
    this.id = uuidv4();
    this.title = title;
    this.author = author;
    this.columns = columns.length > 0 ? columns : ['sin titulo'];
    this.rows = [];
    this.created = new Date();
    this.updated = new Date();
  }

  addRow(isTitle: boolean = false) {
    this.rows.push(new Row(isTitle, ...this.columns))
  }

  getContent(title: string, rowIndex: number): string | number {
    return this.rows[rowIndex]?.getFieldContent(title)
  }

  setContent(title: string, rowIndex: number, value: string | number): void {
    return this.rows[rowIndex]?.setFieldContent(title, value)
  }

  getRow(rowIndex: number): Row {
    return this.rows[rowIndex].getRow()
  }

  deleteRow(rowIndex: number): void {
    this.rows.splice(rowIndex, 1)
  }

  getRows(): Row[] {
    return this.rows
  }

  getTitles(): Row[] {
    return this.rows.filter(row => row.isTitle)
  }

  getTable(): any {
    // Table Titles + array of Field Objects
    return this.columns.concat(this.rows.map(row => row.getRow()))
  }

  getTableContent() {
    const table: (string | number)[][] = []

    this.rows.forEach(row => {
      const rowContent: (string | number)[] = []
      row.isTitle
        ? rowContent.push(row.fields.title)
        : this.columns.forEach(key => rowContent.push(row.fields[key]))
      table.push(rowContent)
    })
    return table
  }
}

export default Spreadsheet

const a = new Spreadsheet('first spreadsheet', uuidv4(), 'descripcion', 'cantidad', 'unidad', 'sub total') // 4 titulos seran default en este test de proyecto
a.addRow()
a.addRow()
a.addRow(true)
a.addRow()
a.getTableContent()
console.log(JSON.stringify(a))