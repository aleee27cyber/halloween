# Bloque 2: Las Ramas del Más Allá y Resolución del Conflicto

## Acción 3.6: Creación de las ramas

Las dos ramas se crean desde el mismo commit de `main` (`ffc5eab`). Son dos visiones alternativas e independientes del mismo código: ninguna depende de la otra, así que ambas parten del mismo estado base. Esto garantiza que modifiquen la misma línea y que el conflicto sea inevitable y fácil de analizar.

```bash
git branch feature-nightmare
git branch feature-sanctuary
git branch -v
```

![Acción 3.6]

## Acción 3.7: Commit en feature-nightmare

Se modifica la línea 2 de `main.js` para inyectar la lógica de la visión fosca.

```bash
git switch feature-nightmare
git diff
git add main.js
git commit -m "feat: inject nightmare logic into ghost protocol"
git push -u origin feature-nightmare
```

![Acción 3.7]

## Acción 3.8: Commit en feature-sanctuary

Se modifica exactamente la misma línea con la lógica de protección.

```bash
git switch feature-sanctuary
git diff
git add main.js
git commit -m "feat: establish sanctuary protection in ghost protocol"
git push -u origin feature-sanctuary
```

![Acción 3.8]

## Acción 3.9: Integración de las ramas

La primera fusión fue *fast-forward* porque `main` no había avanzado. La segunda generó conflicto.

```bash
git switch main
git merge feature-nightmare
git merge feature-sanctuary
```

![Acción 3.9]

## Acción 3.10: Resolución del conflicto

Se analizó `main.js`, se eliminaron las marcas `<<<<<<<`, `=======` y `>>>>>>>` y se conservó la lógica del santuario, porque es la que protege el servidor.

```bash
git add main.js
git commit -m "merge: resolve ghostProtocol conflict keeping sanctuary logic"
```

![Acción 3.10]