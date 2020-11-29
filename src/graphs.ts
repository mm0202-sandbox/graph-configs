import * as fs from 'fs'
import { EStatGraphConfigs } from "@mm0202-package/declare";

export const graphs: EStatGraphConfigs = {
    '0003143513': {
        statsDataId: '0003143513',
        title: [
            '消費者物価指数',
            '2015年基準消費者物価指数1',
            '消費者物価指数（2015年基準）',
        ],
        limitYears: 120,
        series: { classObj: { id: 'area' } },
        data: { classObj: { id: 'tab' }, defaultClassCode: '1' },
        conditions: [
            {
                classObj: { id: 'area' },
                defaultClassCode: '00000',
                category: '地域',
            },
            {
                classObj: { id: 'cat01' },
                defaultClassCode: '0001',
                category: '品目',
                lv: '1',
            },
        ],
        note: '※ 地域によっては、取得できない品目データがあります。'
    },
    '0003090660': {
        statsDataId: '0003090660',
        title: ['自動車輸送統計調査', '自動車輸送統計月報', '旅客輸送', '原単位'],
        limitYears: 70,
        series: { classObj: { id: 'cat02' } },
        data: { classObj: { id: 'cat01' }, defaultClassCode: '00001' },
    },
    '0003090589': {
        statsDataId: '0003090589',
        title: [
            '自動車輸送統計調査',
            '自動車輸送統計月報',
            '旅客輸送',
            '地方運輸局別・車種別輸送人員',
        ],
        limitYears: 25,
        series: { classObj: { id: 'area' } },
        data: { classObj: { id: 'cat01' }, defaultClassCode: '00001' },
    },
    '0003090661': {
        statsDataId: '0003090661',
        title: [
            '自動車輸送統計調査',
            '自動車輸送統計月報',
            '旅客輸送',
            '地方運輸局別・車種別輸送人キロ',
        ],
        limitYears: 25,
        series: { classObj: { id: 'area' } },
        data: { classObj: { id: 'cat01' }, defaultClassCode: '00001' },
    },
}

fs.writeFileSync('config/graphs.json', JSON.stringify(graphs))