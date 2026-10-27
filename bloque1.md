# Bloque 1: Invocación del Repositorio y Línea Base


## Acción 3.1: Crear el directorio e inicializar Git

`git init` crea la carpeta oculta `.git`, donde Git guarda el historial del proyecto. El directorio de trabajo local se llama `Halloween2026`.

```bash
git init -b main
```

![Acción 3.1]

## Acción 3.2: Configurar nombre y correo

Se define la identidad que aparecerá en cada commit.

```bash
git config user.name "Tu Nombre"
git config user.email "tu.correo@ejemplo.com"
git config --list --local
```

![Acción 3.2]

## Acción 3.3: Primer commit

Se crea `main.js` con la estructura base y se registra en el historial.

```bash
git add main.js
git commit -m "feat: add base structure for server room application"
```

![Acción 3.3]

## Acción 3.4: Segundo y tercer commit

Se añaden dos funciones de seguridad, cada una en un commit separado.

```bash
git add main.js
git commit -m "feat: add access control to server room"
```

![Commit 2]

```bash
git add main.js
git commit -m "feat: add intrusion alarm security system"
```

![Commit 3]

## Acción 3.5: Historial en una línea

Se comprueba que la línea temporal inicial es estable.

```bash
git log --oneline
```

![Acción 3.5]