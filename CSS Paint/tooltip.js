class Tooltip {
    static get inputProperties() {
        return [
            '--radius',
        ]
    }
    paint(ctx, size, properties) {
        const { width,height } = size;
        const radius = Number(properties.get('--radius'))||5;
        const deg = Math.PI / 2;
        const edge = 10;
        const pos = 30;
        ctx.beginPath();
        ctx.moveTo(radius,0);
        ctx.lineTo(width-2*radius,0);
        ctx.arc(width-radius,radius,radius,-deg,0);
        ctx.lineTo(width,height-2*radius-edge);
        ctx.arc(width-radius,height-radius-edge,radius,0,deg);
        ctx.lineTo(pos+edge*0.6,height-edge);
        ctx.lineTo(pos,height);
        ctx.lineTo(pos-edge*0.6,height-edge);
        ctx.lineTo(radius,height-edge);
        ctx.arc(radius,height-radius-edge,radius,deg,2*deg);
        ctx.lineTo(0,radius-edge);
        ctx.arc(radius,radius,radius,-2*deg,-deg);
        ctx.closePath();
        ctx.fillStyle = '#000';
        ctx.fill();
        //ctx.stroke();
    }
}

registerPaint('tooltip', Tooltip);