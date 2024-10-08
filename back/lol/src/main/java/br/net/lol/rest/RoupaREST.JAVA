package br.net.lol.rest;

import br.net.lol.dto.RoupaDto;
import br.net.lol.service.RoupaService;

import org.postgresql.shaded.com.ongres.scram.common.bouncycastle.pbkdf2.RuntimeCryptoException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;



import java.util.List;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/roupas")
public class RoupaRest {

    @Autowired
    private RoupaService roupaService;

    @GetMapping
    public ResponseEntity<List<RoupaDto>> getAllRoupas() {
        List<RoupaDto> roupas = roupaService.getAllRoupas();
        return ResponseEntity.ok(roupas);
    }

    @PostMapping
    public ResponseEntity<RoupaDto> saveRoupa(@RequestBody RoupaDto roupaDto) {
        RoupaDto savedRoupa = roupaService.saveRoupa(roupaDto);
        return ResponseEntity.ok(savedRoupa);
    }

    @PutMapping("/{id}")
    public ResponseEntity<RoupaDto> updateRoupa(@PathVariable Long id, @RequestBody RoupaDto roupaDto) {
        try {
            RoupaDto updateRoupa = roupaService.updateRoupa(id, roupaDto);
            return ResponseEntity.ok(updateRoupa);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRoupa(@PathVariable Long id) {
        try {
            roupaService.deleteRoupa(id);
            return ResponseEntity.noContent().build();
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
     }

 
    
}
