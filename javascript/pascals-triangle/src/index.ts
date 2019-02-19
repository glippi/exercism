type PascalTriangle = Array<Array<number>>

export function pascalTriangle(number: number, depthRow: number): PascalTriangle {
    const result = pascalTriangleRec([[number]], depthRow - 1)
    return result
}

function generateNextRow(previousRow: number[]):number[] {
  const generatedArray = previousRow.map((element, i) => i - 1 >= 0 ? previousRow[i - 1] + element : element)
  return [ ...generatedArray, previousRow[0]]
}

function pascalTriangleRec(pascalTriangle: PascalTriangle, numNextRows: number): PascalTriangle {
  if(numNextRows === 0) return pascalTriangle

  pascalTriangle.push(generateNextRow(pascalTriangle[pascalTriangle.length - 1]));
  return pascalTriangleRec(pascalTriangle, numNextRows - 1)
}
