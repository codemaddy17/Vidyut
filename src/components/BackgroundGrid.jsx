import React, { useEffect, useRef } from 'react';

/**
 * Enterprise Power Transmission Grid Background Component
 * Simulates India's living national electrical grid: substations, high-voltage towers, 
 * renewable farms, load centers, and intelligent dynamic energy pulses.
 */
export default function BackgroundGrid() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let isTabActive = true;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;

    let targetParallaxX = 0;
    let targetParallaxY = 0;
    let currentParallaxX = 0;
    let currentParallaxY = 0;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e) => {
      if (isMobile || prefersReducedMotion) return;
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      targetParallaxX = ((e.clientX - cx) / cx) * 10;
      targetParallaxY = ((e.clientY - cy) / cy) * 10;
    };

    if (!isMobile && !prefersReducedMotion) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    const nodeCount = isMobile ? 16 : 30;
    const nodes = [];
    const nodeTypes = ['substation', 'tower', 'renewable', 'load_center'];

    for (let i = 0; i < nodeCount; i++) {
      const type = nodeTypes[i % nodeTypes.length];
      const anchorX = (Math.random() * 0.85 + 0.075) * canvas.width;
      const anchorY = (Math.random() * 0.85 + 0.075) * canvas.height;

      let radius = 3;
      let color = 'rgba(41, 54, 129, 0.15)';

      if (type === 'substation') {
        radius = 5.5;
        color = 'rgba(41, 54, 129, 0.18)';
      } else if (type === 'renewable') {
        radius = 4.0;
        color = 'rgba(149, 204, 221, 0.25)';
      } else if (type === 'load_center') {
        radius = 5.0;
        color = 'rgba(139, 107, 74, 0.22)';
      }

      nodes.push({
        id: i, anchorX, anchorY, x: anchorX, y: anchorY,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        driftRadius: Math.random() * 2.5 + 1.0,
        radius, type, color, glowTimer: 0
      });
    }

    const edges = [];
    const maxConnDistance = isMobile ? 240 : 210;

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].anchorX - nodes[j].anchorX;
        const dy = nodes[i].anchorY - nodes[j].anchorY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < maxConnDistance) {
          edges.push({ from: i, to: j, dist, opacity: 0.08 });
        }
      }
    }

    const pulses = [];

    const spawnPulse = (edgeIdx, fromNodeIdx, customSpeed) => {
      const edge = edges[edgeIdx];
      if (!edge) return;
      const isForward = edge.from === fromNodeIdx;
      const speed = customSpeed || (Math.random() * 0.006 + 0.004);
      const colors = ['rgba(66, 116, 217, 0.8)', 'rgba(149, 204, 221, 0.85)', 'rgba(139, 107, 74, 0.8)'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      pulses.push({
        edgeIdx, progress: isForward ? 0 : 1, direction: isForward ? 1 : -1,
        speed, color, size: Math.random() * 1.2 + 2.2
      });
    };

    if (!prefersReducedMotion) {
      for (let k = 0; k < Math.min(8, edges.length); k++) {
        const idx = Math.floor(Math.random() * edges.length);
        if (edges[idx]) spawnPulse(idx, edges[idx].from);
      }
    }

    const handleClick = (e) => {
      if (prefersReducedMotion) return;
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left - currentParallaxX;
      const clickY = e.clientY - rect.top - currentParallaxY;
      let nearestIdx = -1;
      let minD = Infinity;
      nodes.forEach((node, idx) => {
        const d = Math.sqrt((node.x - clickX) ** 2 + (node.y - clickY) ** 2);
        if (d < minD) { minD = d; nearestIdx = idx; }
      });
      if (nearestIdx !== -1) {
        nodes[nearestIdx].glowTimer = 1.0;
        edges.forEach((edge, edgeIdx) => {
          if (edge.from === nearestIdx || edge.to === nearestIdx) {
            spawnPulse(edgeIdx, nearestIdx, 0.012);
          }
        });
      }
    };

    window.addEventListener('click', handleClick);

    const handleVisibilityChange = () => {
      isTabActive = !document.hidden;
      if (isTabActive && !prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    let frameCount = 0;

    const render = () => {
      if (!isTabActive) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      currentParallaxX += (targetParallaxX - currentParallaxX) * 0.05;
      currentParallaxY += (targetParallaxY - currentParallaxY) * 0.05;

      ctx.save();
      ctx.translate(currentParallaxX, currentParallaxY);

      // Blueprint grid
      const gridSize = 110;
      ctx.strokeStyle = 'rgba(41, 54, 129, 0.035)';
      ctx.lineWidth = 0.75;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
      }

      // Update node drift
      nodes.forEach((node) => {
        if (!prefersReducedMotion) {
          node.x += node.vx;
          node.y += node.vy;
          const dx = node.x - node.anchorX;
          const dy = node.y - node.anchorY;
          if (Math.sqrt(dx * dx + dy * dy) > node.driftRadius) {
            node.vx *= -1;
            node.vy *= -1;
          }
        }
        if (node.glowTimer > 0) {
          node.glowTimer = Math.max(0, node.glowTimer - 0.03);
        }
      });

      // Draw transmission lines
      edges.forEach((edge) => {
        const a = nodes[edge.from];
        const b = nodes[edge.to];
        ctx.strokeStyle = 'rgba(41, 54, 129, 0.08)';
        ctx.lineWidth = 0.85;
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
      });

      // Draw nodes
      nodes.forEach((node) => {
        if (node.glowTimer > 0) {
          ctx.strokeStyle = `rgba(66, 116, 217, ${node.glowTimer * 0.4})`;
          ctx.lineWidth = 2;
          ctx.beginPath(); ctx.arc(node.x, node.y, node.radius + 4, 0, Math.PI * 2); ctx.stroke();
        }
        ctx.fillStyle = node.color;
        if (node.type === 'substation') {
          ctx.beginPath(); ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2); ctx.fill();
          ctx.strokeStyle = 'rgba(41, 54, 129, 0.25)'; ctx.lineWidth = 1;
          ctx.beginPath(); ctx.arc(node.x, node.y, node.radius + 3, 0, Math.PI * 2); ctx.stroke();
        } else if (node.type === 'renewable') {
          ctx.beginPath(); ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2); ctx.fill();
          ctx.strokeStyle = 'rgba(125, 175, 138, 0.35)'; ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(node.x - 3, node.y + 3); ctx.lineTo(node.x + 3, node.y - 3); ctx.stroke();
        } else if (node.type === 'load_center') {
          ctx.beginPath(); ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2); ctx.fill();
        } else {
          ctx.beginPath();
          ctx.moveTo(node.x, node.y - node.radius);
          ctx.lineTo(node.x + node.radius, node.y);
          ctx.lineTo(node.x, node.y + node.radius);
          ctx.lineTo(node.x - node.radius, node.y);
          ctx.closePath(); ctx.fill();
        }
      });

      // Energy pulses
      if (!prefersReducedMotion) {
        for (let p = pulses.length - 1; p >= 0; p--) {
          const pulse = pulses[p];
          const edge = edges[pulse.edgeIdx];
          if (!edge) { pulses.splice(p, 1); continue; }

          pulse.progress += pulse.speed * pulse.direction;
          const a = nodes[edge.from];
          const b = nodes[edge.to];
          const cx = a.x + (b.x - a.x) * pulse.progress;
          const cy = a.y + (b.y - a.y) * pulse.progress;

          ctx.save();
          ctx.shadowBlur = 3;
          ctx.shadowColor = pulse.color;
          ctx.fillStyle = pulse.color;
          ctx.beginPath(); ctx.arc(cx, cy, pulse.size, 0, Math.PI * 2); ctx.fill();
          ctx.restore();

          if (pulse.progress >= 1.0 || pulse.progress <= 0) {
            const targetIdx = pulse.progress >= 1.0 ? edge.to : edge.from;
            if (nodes[targetIdx]) nodes[targetIdx].glowTimer = 0.8;
            if (Math.random() < 0.65) {
              const connected = [];
              edges.forEach((e, idx) => {
                if (idx !== pulse.edgeIdx && (e.from === targetIdx || e.to === targetIdx)) {
                  connected.push({ idx, from: targetIdx });
                }
              });
              if (connected.length > 0) {
                const next = connected[Math.floor(Math.random() * connected.length)];
                spawnPulse(next.idx, next.from, pulse.speed);
              }
            }
            pulses.splice(p, 1);
          }
        }

        frameCount++;
        if (frameCount % 60 === 0 && pulses.length < 16) {
          const idx = Math.floor(Math.random() * edges.length);
          if (edges[idx]) spawnPulse(idx, edges[idx].from);
        }
      }

      ctx.restore();
      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    if (!prefersReducedMotion) {
      animationFrameId = requestAnimationFrame(render);
    } else {
      render();
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if (!isMobile && !prefersReducedMotion) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      window.removeEventListener('click', handleClick);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="background-canvas-container">
      <canvas ref={canvasRef} />
    </div>
  );
}
