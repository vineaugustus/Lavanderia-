package br.net.lol.rest;

import br.net.lol.dto.PedidoDto;
import br.net.lol.service.PedidoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/pedidos")
public class PedidoRest {

    @Autowired
    private PedidoService pedidoService;

    @GetMapping
    public List<PedidoDto> getAllPedidos() {
        return pedidoService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<PedidoDto> getPedidoById(@PathVariable Long id) {
        Optional<PedidoDto> pedido = pedidoService.findById(id);
        return pedido.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public PedidoDto createPedido(@RequestBody PedidoDto pedidoDto) {
        return pedidoService.save(pedidoDto);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PedidoDto> updatePedido(@PathVariable Long id, @RequestBody PedidoDto pedidoDto) {
        Optional<PedidoDto> existingPedido = pedidoService.findById(id);
        if (existingPedido.isPresent()) {
            pedidoDto.setId(id);
            PedidoDto updatedPedido = pedidoService.save(pedidoDto);
            return ResponseEntity.ok(updatedPedido);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePedido(@PathVariable Long id) {
        Optional<PedidoDto> existingPedido = pedidoService.findById(id);
        if (existingPedido.isPresent()) {
            pedidoService.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}

