import { WordleCell } from "./wordle-cell/wordle-cell";
import { Col, Row } from "react-bootstrap";


export function WordleBlock(wordleblockProps) {
    let columns = Array.from(Array(wordleblockProps.columns).keys()) // make an array of size of columns
    let rows = Array.from(Array(wordleblockProps.rows).keys())       // make an array of size of rows

    return (
            <Col md={8}>
                {rows.map((row, rowIndex)=>(
                    <Row key={rowIndex} className="pb-2">
                        {columns.map((column, colIndex)=>(
                            <WordleCell
                                letter={wordleblockProps.guessedWords[rowIndex] ? wordleblockProps.guessedWords[rowIndex].charAt(colIndex) ? wordleblockProps.guessedWords[rowIndex].charAt(colIndex) : ' ' : ' '}
                                index={rowIndex.toString().concat(colIndex.toString())}
                                key={colIndex}
                            />
                        ))}
                    </Row>
                ))}
            </Col>
    );
}