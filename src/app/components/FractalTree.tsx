"use client"

import { useEffect, useRef } from 'react';
/*
const FractalTree = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    let time = 0;
    let maxDepth = 10;

    useEffect(() => {
        const canvas = canvasRef.current;

        if (!canvas) {
            console.error('Canvas not found');
            return;
        }

        const ctx = canvas.getContext("2d");

        // Configuración del canvas
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Función para dibujar el árbol fractal
        const drawTree = (
            startX: number,
            startY: number,
            length: number,
            angle: number,
            branchWidth: number,
            color1: string,
            color2: string,
            depth: number) => {
                
            if (!ctx) {
                console.error('Canvas context not found');
                return;
            }

            ctx.beginPath();
            ctx.save();
            ctx.strokeStyle = color1;
            ctx.fillStyle = color2;
            ctx.lineWidth = branchWidth;
            ctx.translate(startX, startY);
            ctx.rotate(angle * Math.PI / 180);
            ctx.moveTo(0, 0);
            ctx.lineTo(0, -length);
            ctx.stroke();

            if (depth >= maxDepth) {
                ctx.restore();
                return;
            }

            drawTree(0, -length, length * 0.75, angle - 20, branchWidth * 0.7, color1, color2, depth + 1);
            drawTree(0, -length, length * 0.75, angle + 20, branchWidth * 0.7, color1, color2, depth + 1);

            ctx.restore();
        };

        const animate = () => {
            if (!ctx) {
                console.error('Canvas context not found');
                return;
            }

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const length = 120 + 20 * Math.sin(time / 1000);
            const angle = 0 + 10 * Math.sin(time / 1000);
            maxDepth = Math.floor(10 * Math.sin(time / 1000)) + 1;

            drawTree(canvas.width / 2, canvas.height - 80, length, angle, 10, '#ECECEC', '#8B8B8B', 0);
            time += 5;

            requestAnimationFrame(animate);
        };

        animate();
    }, []);

    return (
        <canvas ref={canvasRef} className="absolute bottom-0 left-0 w-full h-full z-[-1] m-0"></canvas>
    );
};*/

/*
const FractalTree = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    let time = 0;
    let maxDepth = 1;

    useEffect(() => {
        const canvas = canvasRef.current;

        if (!canvas) {
            console.error('Canvas not found');
            return;
        }

        const ctx = canvas.getContext("2d");

        const resizeCanvas = () => {
            if (!canvas || !ctx) return;
            
            // Escalar el canvas basado en el devicePixelRatio para mejorar calidad
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            ctx.scale(dpr, dpr);

            // Ajustar el tamaño y profundidad del árbol basado en el ancho de la pantalla
            maxDepth = window.innerWidth < 768 ? 7 : 10; // Ajusta la profundidad en pantallas pequeñas
        };

        // Configuración del canvas y ajuste en redimensionamiento
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Función para dibujar el árbol fractal
        const drawTree = (
            startX: number,
            startY: number,
            length: number,
            angle: number,
            branchWidth: number,
            color1: string,
            color2: string,
            depth: number
        ) => {
            if (!ctx) {
                console.error('Canvas context not found');
                return;
            }

            ctx.beginPath();
            ctx.save();
            ctx.strokeStyle = color1;
            ctx.fillStyle = color2;
            ctx.lineWidth = branchWidth;
            ctx.translate(startX, startY);
            ctx.rotate(angle * Math.PI / 180);
            ctx.moveTo(0, 0);
            ctx.lineTo(0, -length);
            ctx.stroke();

            if (depth >= maxDepth) {
                ctx.restore();
                return;
            }

            drawTree(0, -length, length * 0.75, angle - 20, branchWidth * 0.7, color1, color2, depth + 1);
            drawTree(0, -length, length * 0.75, angle + 20, branchWidth * 0.7, color1, color2, depth + 1);

            ctx.restore();
        };

        const animate = () => {
            if (!ctx) {
                console.error('Canvas context not found');
                return;
            }

            ctx.clearRect(0, 0, canvas.width / (window.devicePixelRatio || 1), canvas.height / (window.devicePixelRatio || 1));

            // Ajustar el tamaño del árbol basado en el ancho de la pantalla
            const isMobile = window.innerWidth < 768;
            const length = isMobile ? 60 : 120 + 20 * Math.sin(time / 1000); // Ramas más cortas en móvil
            const angle = 0 + 10 * Math.sin(time / 1000);
            const branchWidth = isMobile ? 6 : 10; // Ramas más delgadas en móvil

            drawTree(
                canvas.width / (2 * (window.devicePixelRatio || 1)),
                canvas.height / (window.devicePixelRatio || 1) - 80,
                length,
                angle,
                branchWidth,
                '#ECECEC',
                '#8B8B8B',
                0
            );
            time += 5;

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return (
        <canvas ref={canvasRef} className="absolute bottom-0 left-0 w-full h-full z-[-1] m-0"></canvas>
    );
};*/

const FractalTree = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    let time = 0;

    useEffect(() => {
        const canvas = canvasRef.current;

        if (!canvas) {
            console.error('Canvas not found');
            return;
        }

        const ctx = canvas.getContext("2d");

        const resizeCanvas = () => {
            if (!canvas || !ctx) return;

            // Escalar el canvas basado en el devicePixelRatio para mejorar calidad
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            ctx.scale(dpr, dpr);

            // Ajustar el tamaño y profundidad del árbol basado en el ancho de la pantalla
        };

        // Configuración del canvas y ajuste en redimensionamiento
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Función para dibujar el árbol fractal
        const drawTree = (
            startX: number,
            startY: number,
            length: number,
            angle: number,
            branchWidth: number,
            color1: string,
            color2: string,
            depth: number,
            maxDepth: number // Pasar maxDepth como parámetro para controlarlo mejor
        ) => {
            if (!ctx) {
                console.error('Canvas context not found');
                return;
            }

            ctx.beginPath();
            ctx.save();
            ctx.strokeStyle = color1;
            ctx.fillStyle = color2;
            ctx.lineWidth = branchWidth;
            ctx.translate(startX, startY);
            ctx.rotate(angle * Math.PI / 180);
            ctx.moveTo(0, 0);
            ctx.lineTo(0, -length);
            ctx.stroke();

            // Si llegamos a la profundidad máxima, detenemos la recursión
            if (depth >= maxDepth) {
                ctx.restore();
                return;
            }

            // Dibujar las ramas recursivamente
            drawTree(0, -length, length * 0.75, angle - 20, branchWidth * 0.7, color1, color2, depth + 1, maxDepth);
            drawTree(0, -length, length * 0.75, angle + 20, branchWidth * 0.7, color1, color2, depth + 1, maxDepth);

            ctx.restore();
        };

        const animate = () => {
            if (!ctx) {
                console.error('Canvas context not found');
                return;
            }

            ctx.clearRect(0, 0, canvas.width / (window.devicePixelRatio || 1), canvas.height / (window.devicePixelRatio || 1));

            // Ajustar el tamaño del árbol basado en el ancho de la pantalla
            const isMobile = window.innerWidth < 768;
            const length = isMobile ? 50 : 120 + 20 * Math.sin(time / 1000); // Ramas más cortas en móvil
            const angle = 0 + 10 * Math.sin(time / 1000);
            const branchWidth = isMobile ? 5 : 5; // Ramas más delgadas en móvil
            const maxDepth = isMobile ? 8 : 8; // Menor profundidad en pantallas pequeñas

            drawTree(
                canvas.width / (2 * (window.devicePixelRatio || 1)),
                canvas.height / (window.devicePixelRatio || 1) - 80,
                length,
                angle,
                branchWidth,
                '#8B8B8B',
                '#ECECEC',
                0,
                maxDepth // Pasar maxDepth aquí
            );
            time += 5;

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return (
        <canvas ref={canvasRef} className="absolute bottom-0 left-0 w-full h-full z-[-1] m-0"></canvas>
    );
};


export default FractalTree;
