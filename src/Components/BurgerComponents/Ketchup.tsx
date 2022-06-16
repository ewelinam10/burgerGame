import React from 'react';
import '../../styles/ketchup.scss'
class Ketchup extends React.Component {
    private lines: JSX.Element[] = [];
    constructor() {
        super({});
        this.makeCurvyLinesOfKetchup(5);
    }

    render(): React.ReactNode {
        //this.makeCurvyLinesOfKetchup(5); why here not working?
        return (
            <div id="ketchup" onClick={this.onClickKetchup}>
                {this.lines}
            </div>
        );
    }
    makeCurvyLinesOfKetchup(linesCount: number) {
        let curveLine;
        for (let i = 0; i < linesCount; i++) {
            curveLine = <div className='curve small'></div>;
            this.lines.push(curveLine);
            curveLine = <div className='curve large'></div>;
            this.lines.push(curveLine);
        }
    }

    onClickKetchup() {
        // for (let line of this.lines) {
        //     if (line.type.className.con)
        // }
    }
}

export default Ketchup; 