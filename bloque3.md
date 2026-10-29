# Bloque 3: Viaje Temporal, Exorcismo del Código y Publicación Remota


## Acción 3.11: Commit infectado

Se añadió la función `spectralException` a `main.js` y se registró en el historial.

```bash
git add main.js
git commit -m "feat: unhandled spectral exception"
```

![Acción 3.11]

## Acción 3.12: Diferencia con el último punto seguro

```bash
git diff 2175a9b 88ff8a4
```

![Acción 3.12]

## Acción 3.13: Reversión temporal

El commit infectado se subió a GitHub antes de revertirlo, así que tras el reset fue necesario `--force-with-lease`. Es seguro porque el repositorio es propio y nadie más trabaja en él.

```bash
git reset --hard 2175a9b
git push --force-with-lease
```

![Acción 3.13]

## Acción 3.14: Topología final

```bash
git log --oneline --graph --all
```

![Acción 3.14]

## Acción 3.15: Publicación en GitHub

El repositorio público `halloween-git-rescue` está vinculado como remoto `origin` e incluye las tres ramas, el historial y los ficheros Markdown.

```bash
git remote -v
git branch -a
```

![Acción 3.15]