package br.net.lol.rest;

import br.net.lol.dto.FuncionarioDto;
import br.net.lol.service.FuncionarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/funcionarios")
public class FuncionarioRest {

    @Autowired
    private FuncionarioService funcionarioService;

    @GetMapping
    public List<FuncionarioDto> getAllFuncionarios() {
        return funcionarioService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<FuncionarioDto> getFuncionarioById(@PathVariable Long id) {
        Optional<FuncionarioDto> funcionario = funcionarioService.findById(id);
        return funcionario.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public FuncionarioDto createFuncionario(@RequestBody FuncionarioDto funcionarioDto) {
        return funcionarioService.save(funcionarioDto);
    }

    @PutMapping("/{id}")
    public ResponseEntity<FuncionarioDto> updateFuncionario(@PathVariable Long id, @RequestBody FuncionarioDto funcionarioDto) {
        Optional<FuncionarioDto> existingFuncionario = funcionarioService.findById(id);
        if (existingFuncionario.isPresent()) {
            funcionarioDto.setId(id);
            FuncionarioDto updatedFuncionario = funcionarioService.save(funcionarioDto);
            return ResponseEntity.ok(updatedFuncionario);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFuncionario(@PathVariable Long id) {
        Optional<FuncionarioDto> existingFuncionario = funcionarioService.findById(id);
        if (existingFuncionario.isPresent()) {
            funcionarioService.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}

