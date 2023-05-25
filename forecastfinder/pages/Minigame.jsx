import React, { useRef, useEffect, useState } from 'react';

class Player {
    constructor() {
        this.format = { x: 0, y: 100, w: 50, h: 50 }
    }

    jump() {
        if (this.format.y == 100) {
            this.format.y = 150
        }
        else {
            this.format.y = 100
        }
    };
}

// Crie uma nova instância do player
var meuPlayer = new Player();

const Game = () => {
    const [jumps, setJumps] = useState(0)
    const canvasRef = useRef(null);

    useEffect(() => {
        console.log(meuPlayer.format.y)
        console.log(jumps)
        updateCanvas();
    }, [jumps]);

    function updateCanvas() {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        // Limpa o canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Desenha o player na posição atual
        ctx.fillRect(meuPlayer.format.x, meuPlayer.format.y, meuPlayer.format.w, meuPlayer.format.h);
        // Chama a função updateCanvas novamente após meio segundo
        setTimeout(updateCanvas, 500);
    }

    return (
        <>
            <canvas ref={canvasRef} width={300} height={150} />
            <button onClick={() => { meuPlayer.jump(); setJumps(jumps + 1) }}>Move</button>
        </>
    )
}

export default Game;
