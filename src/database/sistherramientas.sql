-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-04-2024 a las 17:55:38
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sistema_herramientas_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `idcategoria` int(11) NOT NULL,
  `idcategoriaant` varchar(7) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `descripcion` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `usuarioreg` varchar(6) COLLATE utf8_spanish2_ci NOT NULL,
  `fechareg` datetime NOT NULL,
  `usuariomod` varchar(6) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `fechamod` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalles_entradas`
--

CREATE TABLE `detalles_entradas` (
  `iddetalleentrada` int(11) NOT NULL,
  `identrada` int(11) NOT NULL,
  `codigoentradaant` varchar(10) COLLATE utf8_spanish2_ci NOT NULL,
  `codigoherramienta` varchar(7) COLLATE utf8_spanish2_ci NOT NULL,
  `idherramienta` int(11) NOT NULL,
  `descripcion` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `estatus` varchar(15) COLLATE utf8_spanish2_ci NOT NULL,
  `cantidad` int(11) NOT NULL,
  `preciopedido` int(11) NOT NULL,
  `usuarioreg` varchar(6) COLLATE utf8_spanish2_ci NOT NULL,
  `fechareg` datetime NOT NULL,
  `usuariomod` varchar(6) COLLATE utf8_spanish2_ci NOT NULL,
  `fechamod` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalles_pedidos`
--

CREATE TABLE `detalles_pedidos` (
  `iddetpedido` int(11) NOT NULL,
  `idpedido` int(11) NOT NULL,
  `idpedidoant` varchar(7) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `idherramienta` int(11) NOT NULL,
  `codigoherramienta` varchar(7) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `cantidaddevuelta` int(11) DEFAULT NULL,
  `estado` varchar(15) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `preciopedido` int(11) DEFAULT NULL,
  `totalpedido` int(11) DEFAULT NULL,
  `estatus` varchar(15) COLLATE utf8_spanish2_ci NOT NULL,
  `fechadevolucion` date DEFAULT NULL,
  `usuarioreg` varchar(6) COLLATE utf8_spanish2_ci NOT NULL,
  `fechareg` datetime NOT NULL,
  `usuariomod` varchar(6) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `fechamod` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `devoluciones`
--

CREATE TABLE `devoluciones` (
  `iddevolucion` int(11) NOT NULL,
  `cod_dev_ant` varchar(5) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `idpedido_ant` varchar(7) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `idpedido` int(11) NOT NULL,
  `codigoherramienta_ant` varchar(7) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `idherramienta` int(11) NOT NULL,
  `fecha` datetime NOT NULL,
  `cantidad` int(11) NOT NULL,
  `observaciones` int(11) DEFAULT NULL,
  `estatus` int(11) NOT NULL,
  `usuarioreg` varchar(6) COLLATE utf8_spanish2_ci NOT NULL,
  `fechareg` datetime NOT NULL,
  `usuariomod` varchar(6) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `fechamod` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `entradas`
--

CREATE TABLE `entradas` (
  `identrada` int(11) NOT NULL,
  `codigoentradaant` varchar(10) COLLATE utf8_spanish2_ci NOT NULL,
  `fechaentrada` date NOT NULL,
  `codigoherramienta` varchar(10) COLLATE utf8_spanish2_ci NOT NULL,
  `descripcion` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `cantidad` int(11) NOT NULL,
  `notaentrega` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `ordencompra` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `observacion` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `estatus` varchar(15) COLLATE utf8_spanish2_ci NOT NULL,
  `totalstock` int(11) NOT NULL,
  `ingresado` varchar(30) COLLATE utf8_spanish2_ci NOT NULL,
  `provedor` varchar(30) COLLATE utf8_spanish2_ci NOT NULL,
  `preciopedido` int(11) NOT NULL,
  `precioestandar` int(11) NOT NULL,
  `hora` time NOT NULL,
  `usuarioreg` varchar(6) COLLATE utf8_spanish2_ci NOT NULL,
  `fechareg` datetime NOT NULL,
  `usuariomod` varchar(6) COLLATE utf8_spanish2_ci NOT NULL,
  `fechamod` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `herramientas`
--

CREATE TABLE `herramientas` (
  `idherramienta` int(11) NOT NULL,
  `codigoant` varchar(7) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `descripcion` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `fecha` date DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `nombre` varchar(300) COLLATE utf8_spanish2_ci NOT NULL,
  `marca` varchar (100) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `modelo` varchar (100)COLLATE  utf8_spanish2_ci DEFAULT NULL,
  `observaciones` int(11) DEFAULT NULL,
  `idcategoria` int(11) NOT NULL,
  `categoriaant` varchar(50) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `ubicacion` int(11) DEFAULT NULL,
  `observacioni` varchar(100) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `cantidadminima` int(11) DEFAULT NULL,
  `estatus` varchar(15) COLLATE utf8_spanish2_ci NOT NULL,
  `fcm` int(11) DEFAULT NULL,
  `umb` int(11) DEFAULT NULL,
  `numeroparte` varchar(15) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `preciopedido` int(11) DEFAULT NULL,
  `sm` varchar(15) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `cap` varchar(5) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `precioestandar` int(11) DEFAULT NULL,
  `usuarioreg` varchar(6) COLLATE utf8_spanish2_ci NOT NULL,
  `fechareg` datetime NOT NULL,
  `usuariomod` varchar(6) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `fechamod` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `idpedido` int(11) NOT NULL,
  `idpedidoant` varchar(7) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `idsolicitante` int(11) NOT NULL,
  `idpersonalant` varchar(5) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `fecha` date NOT NULL,
  `destino` varchar(15) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `despachado` varchar(15) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `departamento` varchar(15) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `observacion` varchar(15) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `preciopedido` int(11) DEFAULT NULL,
  `hora` time DEFAULT NULL,
  `usuarioreg` varchar(6) COLLATE utf8_spanish2_ci NOT NULL,
  `fechareg` datetime NOT NULL,
  `usuariomod` varchar(6) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `fechamod` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `solicitantes`
--

CREATE TABLE `solicitantes` (
  `idsolicitante` int(11) NOT NULL,
  `idpersonalant` varchar(5) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `nombre` varchar(15) COLLATE utf8_spanish2_ci NOT NULL,
  `area` varchar(100) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `departamento` varchar(15) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `usuarioreg` varchar(6) COLLATE utf8_spanish2_ci NOT NULL,
  `fechareg` datetime NOT NULL,
  `usuariomod` varchar(6) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `fechamod` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `idusuario` int(11) NOT NULL,
  `idusuarioant` int(11) NOT NULL,
  `nombre` varchar(30) COLLATE utf8_spanish2_ci NOT NULL,
  `user` varchar(6) COLLATE utf8_spanish2_ci NOT NULL,
  `ocupacion` varchar(15) COLLATE utf8_spanish2_ci NOT NULL,
  `clave` varchar(15) COLLATE utf8_spanish2_ci NOT NULL,
  `tipousuario` varchar(15) COLLATE utf8_spanish2_ci NOT NULL,
  `estatus` varchar(15) COLLATE utf8_spanish2_ci NOT NULL,
  `usuarioreg` varchar(6) COLLATE utf8_spanish2_ci NOT NULL,
  `fechareg` datetime NOT NULL,
  `usuariomod` varchar(6) COLLATE utf8_spanish2_ci NOT NULL,
  `fechamod` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`idcategoria`),
  ADD KEY `idcategoriaant` (`idcategoriaant`);

--
-- Indices de la tabla `detalles_entradas`
--
ALTER TABLE `detalles_entradas`
  ADD PRIMARY KEY (`iddetalleentrada`),
  ADD KEY `identrada` (`identrada`),
  ADD KEY `idherramienta` (`idherramienta`),
  ADD KEY `codigoherramienta` (`codigoherramienta`);

--
-- Indices de la tabla `detalles_pedidos`
--
ALTER TABLE `detalles_pedidos`
  ADD PRIMARY KEY (`iddetpedido`),
  ADD KEY `idpedidoant` (`idpedidoant`),
  ADD KEY `idpedido` (`idpedido`),
  ADD KEY `idherramienta` (`idherramienta`);

--
-- Indices de la tabla `devoluciones`
--
ALTER TABLE `devoluciones`
  ADD PRIMARY KEY (`iddevolucion`),
  ADD KEY `cod_dev_ant` (`cod_dev_ant`),
  ADD KEY `codigoherramienta_ant` (`codigoherramienta_ant`),
  ADD KEY `idherramienta` (`idherramienta`),
  ADD KEY `idpedido` (`idpedido`),
  ADD KEY `codigopedido_ant` (`idpedido_ant`);

--
-- Indices de la tabla `entradas`
--
ALTER TABLE `entradas`
  ADD PRIMARY KEY (`identrada`),
  ADD KEY `codigoentradaant` (`codigoentradaant`);

--
-- Indices de la tabla `herramientas`
--
ALTER TABLE `herramientas`
  ADD PRIMARY KEY (`idherramienta`),
  ADD KEY `codigoant` (`codigoant`),
  ADD KEY `idcategoria` (`idcategoria`);

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`idpedido`),
  ADD KEY `idpedidoant` (`idpedidoant`),
  ADD KEY `idpersonalant` (`idpersonalant`),
  ADD KEY `idsolicitante` (`idsolicitante`);

--
-- Indices de la tabla `solicitantes`
--
ALTER TABLE `solicitantes`
  ADD PRIMARY KEY (`idsolicitante`),
  ADD KEY `idpersonalant` (`idpersonalant`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`idusuario`),
  ADD KEY `idusuarioant` (`idusuarioant`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `idcategoria` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `detalles_entradas`
--
ALTER TABLE `detalles_entradas`
  MODIFY `iddetalleentrada` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `detalles_pedidos`
--
ALTER TABLE `detalles_pedidos`
  MODIFY `iddetpedido` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `devoluciones`
--
ALTER TABLE `devoluciones`
  MODIFY `iddevolucion` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `entradas`
--
ALTER TABLE `entradas`
  MODIFY `identrada` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `herramientas`
--
ALTER TABLE `herramientas`
  MODIFY `idherramienta` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `idpedido` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `solicitantes`
--
ALTER TABLE `solicitantes`
  MODIFY `idsolicitante` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `idusuario` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `detalles_entradas`
--
ALTER TABLE `detalles_entradas`
  ADD CONSTRAINT `detalles_entradas_ibfk_1` FOREIGN KEY (`identrada`) REFERENCES `entradas` (`identrada`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `detalles_entradas_ibfk_2` FOREIGN KEY (`idherramienta`) REFERENCES `herramientas` (`idherramienta`);

--
-- Filtros para la tabla `detalles_pedidos`
--
ALTER TABLE `detalles_pedidos`
  ADD CONSTRAINT `detalles_pedidos_ibfk_1` FOREIGN KEY (`idpedido`) REFERENCES `pedidos` (`idpedido`),
  ADD CONSTRAINT `detalles_pedidos_ibfk_2` FOREIGN KEY (`idherramienta`) REFERENCES `herramientas` (`idherramienta`);

--
-- Filtros para la tabla `devoluciones`
--
ALTER TABLE `devoluciones`
  ADD CONSTRAINT `devoluciones_ibfk_1` FOREIGN KEY (`idpedido`) REFERENCES `pedidos` (`idpedido`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `devoluciones_ibfk_2` FOREIGN KEY (`idherramienta`) REFERENCES `herramientas` (`idherramienta`);

--
-- Filtros para la tabla `herramientas`
--
ALTER TABLE `herramientas`
  ADD CONSTRAINT `herramientas_ibfk_1` FOREIGN KEY (`idcategoria`) REFERENCES `categorias` (`idcategoria`);

--
-- Filtros para la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD CONSTRAINT `pedidos_ibfk_1` FOREIGN KEY (`idsolicitante`) REFERENCES `solicitantes` (`idsolicitante`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
