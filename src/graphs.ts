import * as fs from 'fs'

type ClassObjId =
    | 'tab'
    | 'time'
    | 'area'
    | 'cat01'
    | 'cat02'
    | 'cat03'
    | 'cat04'
    | 'cat05'
    | 'cat06'
    | 'cat07'
    | 'cat08'
    | 'cat09'
    | 'cat10'
    | 'cat11'
    | 'cat12'
    | 'cat13'
    | 'cat14'
    | 'cat15'

type GraphType = {
  title: string[]
  statsDataId: string
  limitYears: number
  series: { classObj: { id: ClassObjId } }
  data: { classObj: { id: ClassObjId }; defaultClassCode: string }
}

export const graphs: GraphType[] = [
  {
    title: ['自動車輸送統計調査', '自動車輸送統計月報', '旅客輸送', '原単位'],
    statsDataId: '0003090660',
    limitYears: 70,
    series: { classObj: { id: 'cat02' } },
    data: { classObj: { id: 'cat01' }, defaultClassCode: '00001' },
  },
  {
    title: [
      '自動車輸送統計調査',
      '自動車輸送統計月報',
      '旅客輸送',
      '地方運輸局別・車種別輸送人員',
    ],
    statsDataId: '0003090589',
    limitYears: 25,
    series: { classObj: { id: 'area' } },
    data: { classObj: { id: 'cat01' }, defaultClassCode: '00001' },
  },
  {
    title: [
      '自動車輸送統計調査',
      '自動車輸送統計月報',
      '旅客輸送',
      '地方運輸局別・車種別輸送人キロ',
    ],
    statsDataId: '0003090661',
    limitYears: 25,
    series: { classObj: { id: 'area' } },
    data: { classObj: { id: 'cat01' }, defaultClassCode: '00001' },
  },
]

fs.writeFileSync('config/graphs.json',JSON.stringify(graphs))