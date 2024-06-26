import { tableData } from '@/data'
import type { PredictioInfo, ResultVO } from '@/type'
import { createServer, Response } from 'miragejs'
const server = createServer({})
server.namespace = 'api'

server.get('results', () => {
  const resultVO: ResultVO<{ results: PredictioInfo[] }> = {
    code: 200,
    data: { results: tableData }
  }
  return resultVO
})

server.post('file/upload/predict', (_schema, request) => {
  const { plantId, tissue, description, chrNum, bedString } = JSON.parse(request.requestBody)
  console.log(
    'plantId:',
    plantId,
    'tissue:',
    tissue,
    'description',
    description,
    'chrNum',
    chrNum,
    'bedString',
    bedString
  )
  const resultVO: ResultVO<{}> = { code: 200, data: {} }
  if (plantId) {
    // tableData.unshift(prediction)
    return new Response(
      200,
      {
        token:
          '744193c872b677aab12a0ced447882f4cf9fca92a09d428a26ed145ed2ed2eec665c8824ebc353042ba2be136efcb5c6'
      },
      resultVO
    )
  }
  resultVO.code = 401
  resultVO.message = '文件为空'
  return resultVO
})
