#!/bin/bash
cd "$(dirname "$0")"
npm run dev -- --host &
sleep 2
open http://localhost:5173
wait
