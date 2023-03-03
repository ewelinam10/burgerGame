import React from 'react';
import '../../styles/sauce.scss'
type SauceProps = {
    color: string;
    numberOfCurvyLines: number;
    order: RangeType;
}
export enum RangeType {
    First,
    Second,
    Third
}

export default class Sauce extends React.Component<SauceProps> {
    private lines: JSX.Element[] = [];
    constructor(props: SauceProps) {
        super(props);
        this.makeCurvyLinesOfSauce(props.numberOfCurvyLines);
    }

    render(): React.ReactNode {
        //this.makeCurvyLinesOfKetchup(5); why here not working?


        return (
            <div id="sauce" onClick={this.onClickSauce} style={{ backgroundColor: this.props.color }}>
                {this.lines}
            </div>
        );
    }
    makeCurvyLinesOfSauce(linesCount: number) {
        let curveLine;
        let margin = 7;
        if (this.props.order === RangeType.Second) {
            margin = 40;
        } else if (this.props.order === RangeType.Third) {
            margin = 50;
        }

        for (let i = 0; i < linesCount; i++) {
            if (i === 0) {
                curveLine = <div className='curve small' style={{ marginLeft: `${margin}px` }}></div>;
            } else {
                curveLine = <div className='curve small'></div>;
            }
            this.lines.push(curveLine);
            curveLine = <div className='curve large'></div>;
            this.lines.push(curveLine);
        }
    }

    onClickSauce() {
        // for (let line of this.lines) {
        //     if (line.type.className.con)
        // }
    }
}
